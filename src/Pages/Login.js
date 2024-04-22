import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import {encode as base64_encode} from 'base-64'
import { getSHA256Hash } from "boring-webcrypto-sha256";

export default function Login() {
  return (
    <section className="h-screen flex flex-col items-center">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="flex flex-col md:w-8/12 lg:ml-6 lg:w-5/12 items-center" >
            <div className="mb-3 text-3xl text-gray-900 dark:text-white"> HKLIB</div>
            <form>
              {/* <!-- Email input --> */}
              {/* <span className="text-xl  dark:text-white">Email</span> */}
              <TEInput
                type="email"
                label=""
                size="lg"
                className="mb-6"
                placeholder="Email"
              ></TEInput>

              {/* <!--Password input--> */}
              {/* <span className="text-xl  dark:text-white">Password</span> */}
              <TEInput
                type="password"
                label=""
                className="mb-6"
                size="lg"
                placeholder="Password"
              ></TEInput>

              {/* <!-- Remember me checkbox --> */}
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck3"
                    defaultChecked
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>

                {/* <!-- Forgot password link --> */}
                <a
                  href="#!"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Forgot password?
                </a>
              </div>

              {/* <!-- Submit button --> */}

              <TERipple rippleColor="light" className="w-full">
                <button
                  type="button"
                  className="inline-block w-full rounded bg-primary-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign in
                </button>
              </TERipple>

              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              {/* <!-- Social login buttons --> */}
              <TERipple rippleColor="light" className="w-full">
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  {/* <!-- Facebook --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Continue with Facebook
                </a>
              </TERipple>
              <TERipple rippleColor="light" className="w-full" onClick={async (e) => {
                  e.preventDefault()
                  // const codeVerifier = randomstring();
                  const codeVerifier = base64_encode("1");
                  const codeChallenge = await getSHA256Hash(codeVerifier)
                  window.open("https://hkid-frontend.vercel.app/oauth/login?projectID=hklib.myapp.in&redirectURL=https://hklib.vercel.app/oauth/code_receiver&scope=default&code_challenge=" + codeChallenge + "&code_challenge_method=S256", "_parent")
                }}>
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  style={{ backgroundColor: "#55acee" }}
                  role="button"
                >
                  {/* <!-- Twitter --> */}
                  <svg className="mr-2" width="24px" height="24px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_503_2814)">
      <rect width="28" height="20" rx="2" fill="white"/>
      <mask id="mask0_503_2814" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
      <rect width="28" height="20" rx="2" fill="white"/>
      </mask>
      <g mask="url(#mask0_503_2814)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V0H0V20Z" fill="#F0371D"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.984 8.14571C14.9468 7.33983 15.0054 7.15961 15.2361 6.44961C15.3131 6.21263 15.2588 6.01798 15.1946 5.78812C15.1022 5.45666 14.9892 5.05197 15.2201 4.34149C14.1696 4.00016 12.949 4.85893 12.4939 6.2596C12.0388 7.66028 12.5215 9.07246 13.572 9.41379C13.7601 9.47489 13.739 9.43071 13.6819 9.31108C13.5817 9.10119 13.3707 8.65903 13.984 8.14571ZM11.9901 9.61761C11.5212 8.45288 11.3679 8.3415 10.764 7.9027C10.5624 7.75623 10.3605 7.74774 10.122 7.7377C9.77822 7.72324 9.35844 7.70557 8.75407 7.26647C8.10482 8.16009 8.54439 9.58627 9.73587 10.4519C10.9274 11.3176 12.4196 11.2949 13.0688 10.4013C13.1851 10.2414 13.1365 10.2477 13.0051 10.2651C12.7745 10.2955 12.2888 10.3595 11.9901 9.61761ZM18 10.2538C17.2535 10.2538 17.064 10.2538 16 9.58717C15.3223 9.16253 14.967 9.49983 14.7983 9.65995C14.7022 9.75121 14.6667 9.78491 14.6667 9.58717C14.6667 8.4826 15.8606 7.58717 17.3334 7.58717C18.8061 7.58717 20 8.4826 20 9.58717C19.253 9.58717 18.903 9.81962 18.6163 10.01C18.4175 10.142 18.2492 10.2538 18 10.2538ZM18 9C18 9.18409 17.8508 9.33333 17.6667 9.33333C17.4826 9.33333 17.3334 9.18409 17.3334 9C17.3334 8.8159 17.4826 8.66666 17.6667 8.66666C17.8508 8.66666 18 8.8159 18 9ZM15.2521 11.9499C14.9468 13.1678 15.0054 13.3481 15.2361 14.0581C15.3131 14.295 15.4714 14.4206 15.6584 14.5689C15.9281 14.7826 16.2573 15.0437 16.4882 15.7542C17.5387 15.4128 18.0213 14.0007 17.5662 12.6C17.1111 11.1993 15.8906 10.3405 14.8401 10.6819C14.652 10.743 14.695 10.7663 14.8115 10.8295C15.0159 10.9405 15.4465 11.1742 15.2521 11.9499ZM16.4286 13.6706C16.2535 13.7275 16.0654 13.6317 16.0085 13.4566C15.9517 13.2815 16.0475 13.0935 16.2226 13.0366C16.3976 12.9797 16.5857 13.0755 16.6426 13.2506C16.6995 13.4257 16.6037 13.6137 16.4286 13.6706ZM12.7738 11.9688C11.5212 12.0548 11.3679 12.1662 10.764 12.605C10.5624 12.7514 10.4919 12.9408 10.4087 13.1645C10.2887 13.487 10.1422 13.8808 9.53778 14.3199C10.187 15.2135 11.6792 15.2362 12.8707 14.3705C14.0622 13.5048 14.5018 12.0787 13.8525 11.185C13.7363 11.0251 13.7274 11.0732 13.7033 11.2035C13.6609 11.4322 13.5717 11.9139 12.7738 11.9688ZM11.5009 13.6194C11.3927 13.4704 11.4258 13.262 11.5747 13.1538C11.7236 13.0455 11.9321 13.0786 12.0403 13.2275C12.1485 13.3764 12.1155 13.5849 11.9665 13.6931C11.8176 13.8013 11.6092 13.7683 11.5009 13.6194ZM10.027 8.91707C10.1352 8.76814 10.3436 8.73512 10.4926 8.84333C10.6415 8.95154 10.6745 9.16 10.5663 9.30893C10.4581 9.45787 10.2496 9.49088 10.1007 9.38268C9.95178 9.27447 9.91876 9.06601 10.027 8.91707ZM14.0436 6.06215C14.2187 6.11904 14.3145 6.30709 14.2576 6.48218C14.2007 6.65726 14.0127 6.75308 13.8376 6.69619C13.6625 6.6393 13.5667 6.45125 13.6236 6.27617C13.6805 6.10108 13.8685 6.00526 14.0436 6.06215Z" fill="white"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_503_2814">
      <rect width="28" height="20" rx="2" fill="white"/>
      </clipPath>
      </defs>
      </svg>
                  
                  Continue with HKID
                </a>
              </TERipple>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
}