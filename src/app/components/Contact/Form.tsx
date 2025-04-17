// 'use client'

// import { useState, ChangeEvent, FormEvent, JSX } from 'react';
// import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// export default function ContactForm(): JSX.Element {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you would typically send the data to a server
//     alert('Message sent successfully!');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className='w-full'>
//       <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
//       <div className='bg-white max-w-[594px] max-h-[558px] w-full h-full px-[64px] py-[80px] rounded-3xl space-y-6'>
//         <div>
//           <label htmlFor="name" className="block text-sm font-semibold text-myblack mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full h-[56px] max-w-[466px] bg-[#F5F5F5] rounded-lg focus:outline-0"
//           />
//         </div>
        
//         <div>
//         <label htmlFor="email" className="block text-sm font-semibold text-myblack mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//              className="w-full h-[56px] max-w-[466px] bg-[#F5F5F5] rounded-lg focus:outline-0"
//           />
//         </div>
        
//         <div>
//         <label htmlFor="message" className="block text-sm font-semibold text-myblack mb-1">
//             Your Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={5}
//               className="w-full h-[175px] max-w-[466px] bg-[#F5F5F5] rounded-lg focus:outline-0"
//           />
//         </div>
//         </div>
//        <div className='w-full flex justify-center mt-[40px] lg:mb-[90px]  mb-[52px]'>
//        <button
//           type="submit"
//           className="w-full bg-bggreen   text-mywhite h-[64px] rounded-[10px] transition duration-300 max-w-[342] font-semibold text-sm"
//         >
//           Send Message
//         </button>
//        </div>
//       </form>
      
//       <div className="flex justify-center space-x-[14px] mt-10 lg:mb-[524px] mb-[221px]">
//         <a href="#" className=" max-w-[80px] bg-white p-[24px] max-h-[80px] w-full h-full text-myblack">
//           <Instagram size={32} />
//         </a>
//         <a href="#" className=" max-w-[80px] bg-white p-[24px] max-h-[80px] w-full h-full text-myblack">
//           <Twitter size={32} />
//         </a>
//         <a href="#" className=" max-w-[80px] bg-white p-[24px] max-h-[80px] w-full h-full text-myblack">
//           <Linkedin size={32} />
//         </a>
//         <a href="#" className=" max-w-[80px] bg-white p-[24px] max-h-[80px] w-full h-full text-myblack">
//           <Facebook size={32} />
//         </a>
//       </div>
//     </div>
//   );
// }




'use client'

import { useState, ChangeEvent, FormEvent, JSX } from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const subject = `Message from ${formData.name}`;
    const body = `${formData.message}\n\nFrom: ${formData.email}`;
    const mailtoLink = `mailto:kadiri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      <div className='bg-white max-w-[594px] max-h-[558px] w-full h-full lg:px-[64px] px-[20px] lg:py-[80px] py-[40px] rounded-3xl space-y-6'>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-myblack mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-[56px] max-w-[466px] bg-[#F5F5F5] rounded-lg focus:outline-0"
          />
        </div>
        
        <div>
        <label htmlFor="email" className="block text-sm font-semibold text-myblack mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
             className="w-full h-[56px] max-w-[466px] bg-[#F5F5F5] rounded-lg focus:outline-0"
          />
        </div>
        
        <div>
        <label htmlFor="message" className="block text-sm font-semibold text-myblack mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
              className="w-full h-[175px] max-w-[466px] bg-[#F5F5F5] rounded-lg focus:outline-0"
          />
        </div>
        </div>
       <div className='w-full flex justify-center mt-[40px] lg:mb-[90px]  mb-[52px]'>
       <button
          type="submit"
          className="w-full bg-bggreen   text-mywhite h-[64px] rounded-[10px] transition duration-300 max-w-[342] font-semibold text-sm"
        >
          Send Message
        </button>
       </div>
      </form>
      
      <div className="flex justify-center space-x-[14px] space-y-3 mt-10 lg:mb-[524px] mb-[221px] flex-wrap">
        <a href="#" className=" max-w-[80px] bg-white p-[24px]  max-h-[80px] text-myblack">
          <Instagram size={32} />
        </a>
        <a href="#" className=" max-w-[80px] bg-white p-[24px] max-h-[80px] w-full h-full text-myblack">
          <Twitter size={32} />
        </a>
        <a href="#" className=" max-w-[80px] bg-white p-[24px] max-h-[80px] w-full h-full text-myblack">
          <Linkedin size={32} />
        </a>
        <a href="#" className=" max-w-[80px] bg-white p-[24px] max-h-[80px] w-full h-full text-myblack">
          <Facebook size={32} />
        </a>
      </div>
    </div>
  );
}