import React from "react";

function Footer() {
  return (
    <section className="px-[24px] min-h-screen  py-[32px] flex flex-col gap-[20px] relative">
      <div>
        <h3 className="font-bold text-[62px] leading-[70px] underline-[#fffdd0]">
          CONTACTS
        </h3>
        <div className="w-full h-[1px] bg-secondary rounded-full"></div>
      </div>

      {/* Details and page links */}
      <div className="w-full flex justify-between">
        {/* Details */}
        <div className="space-y-[16px]">
          <span className="text-secondary border border-dashed border-secondary px-2 py-1 rounded-[6px] block w-fit">
            contacts
          </span>
          <p className="text-[20px] leading-[23px]">
            AFSAL VN <br />
            <span className="font-sans text-[18px]">
              afsalvnhere@gmail.com <br />
            </span>
            KERALA <br />
            INDIA
          </p>
        </div>

        {/* Page links */}
        <div className="space-y-[16px]">
          <span className="text-secondary border border-dashed border-secondary px-2 py-1 rounded-[6px] block w-fit">
            page links
          </span>
          <ul className="text-[20px] uppercase flex flex-col items-end gap-[12px] leading-[23px]">
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
          </ul>
        </div>
      </div>

      {/* Form */}
      <form action="" className="flex flex-col gap-[18px]">
        <span className="text-secondary border border-dashed border-secondary px-2 py-1 rounded-[6px] block w-fit">
            email me
        </span>
        
        <input type="email" className="bg-[#151515] border border-secondary/20 p-[20px] rounded-[12px] outline-none" placeholder="email" />
        <textarea name="content" className="bg-[#151515] border border-secondary/20 p-[20px] rounded-[12px] outline-none" placeholder="description" id="description" ></textarea>
        <button className="w-full py-[16px] text-[20px] bg-secondary text-primary rounded-[12px] uppercase font-bold">send email</button>
      </form>

      {/* Social media links */}
      <div className="space-y-[16px]">
        <span className="text-secondary border border-dashed border-secondary px-2 py-1 rounded-[6px] block w-fit">
            socials
        </span>
        <ul className="w-full flex justify-between uppercase text-[16px]">
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
      </div>

      {/* Footer Image */}
      <img
        src="./images/footerImage.png"
        alt="footer"
        className="absolute bottom-0 select-none"
      />
    </section>
  );
}

export default Footer;
