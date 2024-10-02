import Button from "@/components/button";
import Promo from "@/components/promo/promo";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <>
        <Promo />

        <section className="py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="https://www.profee.com/_next/static/media/transfer.52427c59.svg"
              alt="Mobile app interface"
              width={400}
              height={400}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              A favorable alternative <br />
              to wire transfers
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        <section className="py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              The highest level <br />
              of security
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://www.profee.com/_next/static/media/security.9bc0865a.svg"
              alt="Security illustration"
              width={400}
              height={400}
            />
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Electronic Money Institute EMI and infrastructure
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Feature {i + 1}</h3>
                <p className="text-sm text-gray-600">
                  Description of feature {i + 1}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-gray-100 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Our team</h2>
          <div className="flex justify-around">
            {[
              { year: "2017", desc: "Profee starts our adventure" },
              { year: "300+", desc: "New client onboards per year" },
              { year: "60+", desc: "Money transfer destinations" },
              { year: "2", desc: "Minutes - the average sending time" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-purple-600">
                  {stat.year}
                </div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Social focus</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://www.profee.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrust_pilot_image.80b057ea.png&w=1920&q=90"
                alt="Team meeting"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Teamplay</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://www.profee.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheart_image.33ca7d29.png&w=1920&q=90"
                alt="People working"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">We help</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg"
              alt="Customer support"
              width={400}
              height={400}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              We are always happy <br />
              to help and solve any <br />
              of your problems
            </h2>
            <Button size="lg">Contact us</Button>
          </div>
        </section>
      </>
    </div>
  );
}
