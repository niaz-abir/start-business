const IMAGE_URL =
  "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const team = [
  { name: "Chris Bruce", role: "Founder & CEO", image: IMAGE_URL },
  { name: "Sean Carey", role: "Founder & CTO", image: IMAGE_URL },
  { name: "Aileen Gomes", role: "Chief of Staff", image: IMAGE_URL },
  {
    name: '"Rambo"',
    role: "Blockchain Reliability Engineer",
    highlight: true,
    quote:
      "“You miss 100% of the shots you don’t take.” – Wayne Gretzky – Michael Scott",
  },
  { name: "Thomas Stätter", role: "Backend Engineer", image: IMAGE_URL },
  { name: "Oleksii Suslov", role: "Systems Engineer", image: IMAGE_URL },
  { name: "Joe Harrison", role: "Frontend Engineer", image: IMAGE_URL },
  { name: "Jason Alex", role: "Site Reliability Engineer", image: IMAGE_URL },
];

export default function TeamPage() {
  return (
    <section className=" py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm">
              ✦ WHO WE ARE
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight">
              A TEAM OF <br /> WEB3 EXPERTS
            </h1>
          </div>

          <div className="space-y-4 text-black">
            <p>
              BlockJoy started as a project to manage staking with friends and
              family.
            </p>
            <p>
              We built advanced tooling to optimize validator management for
              small teams.
            </p>
            <p>
              Our SaaS platform gives operators full control over their nodes.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) =>
            member.highlight ? (
              <div
                key={index}
                className="flex flex-col justify-between rounded-3xl bg-[#293194] p-6"
              >
                <div className="flex gap-2 text-sm">
                  <span className="rounded-full bg-white px-3 py-1">in</span>
                  <span className="rounded-full bg-white px-3 py-1">🐙</span>
                </div>

                <p className="mt-6 text-sm font-medium leading-relaxed">
                  {member.quote}
                </p>

                <div className="mt-10">
                  <p className="font-semibold text-2xl">{member.name}</p>
                  <p className="text-sm ">{member.role}</p>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="rounded-3xl  p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4  overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="font-semibold text-2xl">{member.name}</p>
                <p className="text-sm tex-[18px]">{member.role}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
