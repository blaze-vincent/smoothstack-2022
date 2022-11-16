import Logo from "../header/logo";
import FooterLink from "./footerLink";
import FooterSection from "./footerSection";
import FooterSectionTitle from "./footerSectionTitle";
import FooterSocials from "./footerSocials";
import FooterText from "./footerText";

export default function Footer(){
  return (<footer 
    className="flex flex-col bg-black"
  >
    <div
      className="
      flex flex-col gap-4 max-w-[1140px] mx-auto py-16
      sm:grid sm:grid-cols-2 sm:gap-6 
      md:grid-cols-3 md:gap-8 p-4 md:px-8"
    >
      <FooterSection>
        <FooterSectionTitle title='About Smoothstack' />
        <FooterText>
          <p>We provide a merit-based career path for candidates who are willing to work hard to build their future. We create a source of excellent new talent for our clients who are building the technology projects of the future.</p>
          <FooterLink href='https://smoothstack.com/it-talent-ecosystem/' text='Learn more.' />
        </FooterText>
      </FooterSection>
      <FooterSection>
        <FooterSectionTitle title='Location' />
        <FooterText>
          <p>Transforming IT hiring nationwide</p>
          <FooterLink href='mailto:info@smoothstack.com' text='info@smoothstack.com' />
          <p className="font-bold">HQ:</p>
          <p>Smoothstack</p>
          <p>8200 Greensboro Dr</p>
          <p>Suite 900</p>
          <p>McLean VA 22102</p>
        </FooterText>
        <FooterText>
          <p className="font-bold">Office Address:</p>
          <p>14220 Dav Rd</p>
          <p>Rockville, MD 20850</p>
        </FooterText>
      </FooterSection>
      <FooterSection>
        <Logo widthOverride={18} />
        <FooterSectionTitle title='Connect with Us' />
        <FooterSocials />
        <FooterText>
          <FooterLink href='https://jobs.smoothstack.com/contact-us?form=build-your-team&' text='Contact Smoothstack'/>
        </FooterText>
      </FooterSection>
      <FooterSection>
        <FooterSectionTitle title='Smoothstack Careers' />
        <FooterText>
          <FooterLink href='https://smoothstack.com/careers/' text='Launch Your Career'/>
          <FooterLink href='https://jobs.smoothstack.com/corporate' text='Corporate Positions'/>
          <FooterLink href='https://jobs.smoothstack.com/senior' text='Experienced Software Engineers'/>
        </FooterText>
      </FooterSection>
    </div>
    <div
      className="bg-neutral-900 h-28 flex justify-center items-center"
    >

    </div>
  </footer>)
}