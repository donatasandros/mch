import { LoginForm } from "./login-form";

export default async function PrisijungimasPage() {
  return (
    <div className="bg-white flex-col max-w-[440px] w-full flex h-fit px-10 py-8 shadow-sm rounded-xl">
      <div className="flex w-full items-center flex-col mb-6">
        <div className="text-center">
          <h1 className="text-2xl mb-2 text-neutral-900 font-semibold">Sveiki sugrįžę</h1>
          <p className="text-neutral-600">Prašome įvesti savo duomenis.</p>
        </div>
      </div>
      <LoginForm />
    </div>
  );
}
