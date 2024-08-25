import FormRegister from '@/components/home/auth/FormRegister';
import { NextPage } from 'next';

const RegisterPage: NextPage = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Tạo một tài khoản</h1>
            <FormRegister />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
