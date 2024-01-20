THINGS TO KNOW

* To create the builds use the below commands.

Dev: expo build:ios --release-channel dev
Staging: expo build:ios --release-channel staging
Production: expo build:ios --release-channel prod

Secrets
* To manage secrets in your environment variables you have to create a new secret with EAS CLI
eas secret:create --scope project --name SECRET_NAME --value secretvalue --type string

* To view any existing secrets for your project, run
eas secret:list

* You can also importing your secrets from a .env file
eas secret:push --scope project --env-file .env

To create a secret in expo (For example: OPENAI_API_KEY)
eas secret:create --scope project --name secret-name --value secret-value --type string

To run in development
SERVER_API_URL="http://localhost:4000/api" npx expo start --dev-client

To build the app on expo and ship it to the stores:
eas build --profile production --platform ios --auto-submit 