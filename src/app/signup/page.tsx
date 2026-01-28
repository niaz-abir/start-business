export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#293194] to-[#4a5bdc] py-8 text-center text-white">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="mt-2 text-sm">Join our amazing community</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 bg-white p-6">
          <button className="rounded-lg bg-[#293194] px-6 py-2 text-sm font-medium text-white">
            Sign Up
          </button>
          <button className="rounded-lg bg-gray-200 px-6 py-2 text-sm font-medium text-gray-700">
            Login
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4 px-6 pb-8">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg text-black border px-4 py-3 text-sm outline-none focus:border-[#293194]"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg text-black border px-4 py-3 text-sm outline-none focus:border-[#293194]"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black rounded-lg border px-4 py-3 text-sm outline-none focus:border-[#293194]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#293194] py-3 font-semibold text-white transition hover:bg-[#1f246f]"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm text-gray-500">Or continue with</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-sm font-medium text-white"
            >
              Facebook
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 py-2 text-sm font-medium text-white"
            >
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
