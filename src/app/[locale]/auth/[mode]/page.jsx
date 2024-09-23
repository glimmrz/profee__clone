import AuthWrapper from "@/components/auth-wrapper";
import LoginForm from "@/components/forms/login-form";
import RegisterForm from "@/components/forms/register-form";

export default function Page({ params }) {
  const views = {
    login: LoginForm,
    register: RegisterForm,
  };

  const CurrentView = views[params.mode];

  return (
    <div className="bg-slate-300 min-h-screen flex items-center justify-center">
      <AuthWrapper params={params}>
        <CurrentView />
      </AuthWrapper>
    </div>
  );
}
