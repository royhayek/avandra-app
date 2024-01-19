export interface SocialLoginProps {
  providerId: string | null | undefined;
  token: string | null | undefined;
  name: string | null | undefined;
  image: string | null | undefined;
  email: string | null | undefined;
  provider: string;
}
