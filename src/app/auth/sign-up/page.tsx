import ButtonHandler from '@/components/forms/sign-up/button-handler';
import SignupFormProvider from '@/components/forms/sign-up/formprovider';
import RegistrationFormStep from '@/components/forms/sign-up/register-steps';
import HighlightBar from '@/components/progress-bar';
import { currentUser } from '@clerk/nextjs';
import React from 'react'

type Props = {}

const SignUp = async (props: Props) => {
   
   return (
     <div className="flex-1 py-36 md:px-16 w-full">
       <div className="flex flex-col h-full gap-3">
         <SignupFormProvider>
           <div className="flex flex-col gap-3">
             <RegistrationFormStep />
             <ButtonHandler />
           </div>
           <HighlightBar />
         </SignupFormProvider>
       </div>
     </div>
   );
}

export default SignUp