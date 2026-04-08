#!/usr/bin/env bash

set -euo pipefail

prompt_if_empty() {
  local var_name="$1"
  local prompt_text="$2"
  local current_value="${!var_name:-}"

  if [[ -n "$current_value" ]]; then
    return
  fi

  read -r -p "$prompt_text: " current_value

  if [[ -z "$current_value" ]]; then
    echo "\"$var_name\" cannot be empty." >&2
    exit 1
  fi

  printf -v "$var_name" '%s' "$current_value"
}

usage() {
  cat <<'EOF'
Usage:
  ./scripts/push-hamravesh.sh [TAG]

Example:
  ./scripts/push-hamravesh.sh

Optional inputs:
  REGISTRY_URL       Registry host
  IMAGE_NAMESPACE    Registry namespace, defaults to registry.hamdocker.ir/mahdimalverdi
  IMAGE_NAME         Image name, defaults to the current directory name
  IMAGE_REPOSITORY   Full image repository name, overrides IMAGE_NAMESPACE and IMAGE_NAME
  TAG                Image tag, defaults to the current short commit hash
  DOCKERFILE_PATH    Dockerfile path, defaults to Dockerfile
  BUILD_CONTEXT      Build context, defaults to .
  BUILD_COMMAND      Local build command, defaults to "pnpm build"
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

DEFAULT_TAG="$(git rev-parse --short=12 HEAD 2>/dev/null || true)"

if [[ -z "$DEFAULT_TAG" ]]; then
  echo "Could not determine the current commit hash. Run this inside a git repository or provide TAG explicitly." >&2
  exit 1
fi

TAG="${1:-${TAG:-$DEFAULT_TAG}}"
DEFAULT_REGISTRY_URL="registry.hamdocker.ir"
DEFAULT_IMAGE_NAMESPACE="registry.hamdocker.ir/mahdimalverdi"
DEFAULT_IMAGE_NAME="$(basename "$(pwd)")"

REGISTRY_URL="${REGISTRY_URL:-$DEFAULT_REGISTRY_URL}"
IMAGE_NAMESPACE="${IMAGE_NAMESPACE:-$DEFAULT_IMAGE_NAMESPACE}"
IMAGE_NAME="${IMAGE_NAME:-$DEFAULT_IMAGE_NAME}"
IMAGE_REPOSITORY="${IMAGE_REPOSITORY:-${IMAGE_NAMESPACE}/${IMAGE_NAME}}"
DOCKERFILE_PATH="${DOCKERFILE_PATH:-Dockerfile}"
BUILD_CONTEXT="${BUILD_CONTEXT:-.}"
BUILD_COMMAND="${BUILD_COMMAND:-pnpm build}"

IMAGE_REF="${IMAGE_REPOSITORY}:${TAG}"

echo "Building site locally with: ${BUILD_COMMAND}"
bash -lc "$BUILD_COMMAND"

if [[ ! -d build ]]; then
  echo 'Local build did not produce a "build" directory.' >&2
  exit 1
fi

echo "Building ${IMAGE_REF}..."
docker build \
  --tag "$IMAGE_REF" \
  --file "$DOCKERFILE_PATH" \
  "$BUILD_CONTEXT"

echo "Pushing ${IMAGE_REF}..."
docker push "$IMAGE_REF"

echo "Done: ${IMAGE_REF}"
