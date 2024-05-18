import { Button, Checkbox, Input, Textarea, Typography } from "@material-tailwind/react";
import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center text-black">
            <Typography variant="h4">Contact Us</Typography>
            <Typography variant="h2" className="my-3">
              Want to work with us?
            </Typography>
            <Typography variant="small">
              Complete this form and we will get back to you in 24 hours.
            </Typography>
          </div>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors text-blue-500 hover:text-[#DD5746]"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
