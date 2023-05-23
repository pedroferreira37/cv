export function Professional(props) {
  return (
    <div>
      <div className="grid grid-cols-[1fr_240px] bg-[#f9f9f9]">
        <div className="p-8">
          <div>
            <h2 className="text-2xl  font-bold">Kate Bishop</h2>
            <h3 className="text-[#0E6CC2] pb-4">Product Designer</h3>
            <p className="text-[.625rem]  font-normal ">
              Over 5 years of professional experience conducting UX research and
              designing interactive end-to-end user flows. I enjoy working in
              close collaboration with teams across technology, business and
              design.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            <p className="text-[.625rem] text-gray-400">Email</p>
            <p className="text-[.625rem]">kate.bishop@katedesign.com</p>
          </div>
          <div>
            <p className="text-[.625rem] text-gray-400">Linkedin</p>
            <p className="text-[.625rem]">kate.bishop@katedesign.com</p>
          </div>
          <div>
            <p className="text-[.625rem] text-gray-400">Telefone</p>
            <p className="text-[.625rem]">kate.bishop@katedesign.com</p>
          </div>
        </div>
      </div>
      <div className="p-8 grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-sm text-[#0E6CC2]">Experiência</h2>
          <div className="flex flex-col gap-4">
            <div className="mt-3">
              <h2 className="text-base font-bold">Product Designer</h2>
              <p className="text-gray-400 text-sm">
                Fintect, Oct 2019 - Present
              </p>
              <p className="text-[.625rem] pt-2">
                Designing end-to-end experience for financial products on mobile
                & web platforms. Working closely with managers, marketing
                specialists and developers.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-sm text-[#0E6CC2]">Formação acadêmica</h2>
          <div className="flex flex-col gap-4">
            <div className="mt-3">
              <h2 className="text-base font-bold">Product Designer</h2>
              <p className="text-gray-400 text-sm">
                Fintect, Oct 2019 - Present
              </p>
            </div>
          </div>
          <h2 className="text-sm text-[#0E6CC2] pt-6"> Habilidades</h2>
          <div className="text-[.625rem] mt-2">
            <p>
              Business Analysis, UX Research, User Testing and Validation,
              Customer Journey Mapping, Information Architecture, Low- and High-
              Fidelity Wireframing, Prototyping, Interaction Design, Visual
              Design, Defining Product Specifications, Design System
              Development, Design Sprints, A/B Testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
