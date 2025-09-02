#!/usr/bin/env bash
set -euo pipefail

# hay que harcodear las credenciales, por ahora

# Usage:
# ./sync-env-to-vercel.sh .env.production production
# ./sync-env-to-vercel.sh .env.staging preview

ENV_FILE=$1
TARGET=$2 # one of: development | preview | production

if [[ ! -f "$ENV_FILE" ]]; then
  echo "❌ Env file '$ENV_FILE' not found"
  exit 1
fi

echo "📦 Syncing environment variables from $ENV_FILE to Vercel ($TARGET)..."

while IFS='=' read -r key value; do
  # skip empty lines or comments
  [[ -z "$key" || "$key" == \#* ]] && continue

  # remove possible quotes around value
  value="${value%\"}"
  value="${value#\"}"

  echo "→ Setting $key for $TARGET"

  # remove old var if exists (ignore errors)
  VERCEL_TOKEN=$VERCEL_TOKEN VERCEL_ORG_ID=$VERCEL_ORG_ID VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID \
    vercel env rm "$key" "$TARGET" -y >/dev/null 2>&1 || true

  # add new var
  echo "$value" | VERCEL_TOKEN=$VERCEL_TOKEN VERCEL_ORG_ID=$VERCEL_ORG_ID VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID \
    vercel env add "$key" "$TARGET" >/dev/null
done < "$ENV_FILE"

echo "✅ Done syncing $ENV_FILE to Vercel ($TARGET)"
