import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 py-10">
      <div className="flex-shrink-0">
        <Image
          src="/images/profilepic.jpg"
          alt="Rajasvi Vinayak Sharma"
          width={160}
          height={160}
          className="rounded-full object-cover"
          priority
        />
      </div>
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          Rajasvi Vinayak Sharma
        </h1>
        <p className="text-gray-600 mb-4">
          Senior Machine Learning Engineer at{" "}
          <a
            href="https://www.moveworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            Moveworks
          </a>{" "}
          (acquired by{" "}
          <a
            href="https://www.servicenow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            ServiceNow
          </a>
          )
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-sm">
          {[
            { label: "Email", href: "mailto:rajasvi777@gmail.com" },
            { label: "Resume", href: "/Rajasvi_MW_20260228.pdf", external: true },
            { label: "GitHub", href: "https://github.com/rajasvi", external: true },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/rajasvi", external: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-accent hover:text-accent-hover transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
