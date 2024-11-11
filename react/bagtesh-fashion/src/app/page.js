import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
    </div>
  );
}
