import Image from "next/image";

export default function ExistingPatients() {
  return (
    <div
      id="existing-patients"
      className="invisible mx-auto flex max-w-6xl p-3 pb-32 lg:visible lg:px-2"
    >
      <Image
        src="https://picsum.photos/648/480?"
        alt="img"
        width={648}
        height={480}
      />
    </div>
  );
}
