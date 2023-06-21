"use client"
import {  useState, useEffect } from "react";
import { AddAndCollpaseButton } from "./AddAndCollapseButton";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { API } from "@/lib/api";
import { Experience } from "@/lib/reducer";
import { FiPlus } from "react-icons/fi";
import {  Select } from "./Select";
import { months, years } from "@/lib/date";
import { debounce } from "@/lib/debounce";

type Props = {
  experiences: Experience[];
  disptach: any;
  resumeId: string;
};

export const ExperienceForm = ({ experiences, disptach, resumeId }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const [id, setId] = useState()


  const create = () => {
    API.post(`/resume/${resumeId}/experiences`).then((req) => {
      if (!req.data) return;
      disptach({ type: "CREATE_EXPERIENCE", payload: req.data });
    });
  };

  const update = (e, experience) => {
    const value = e.target.value
    const id = experience.id
    const name = e.target.name
    disptach({ type: "UPDATE_EXPERIENCE", id, name, payload: value })
    setId(id)
  }

  useEffect(() => {

    const experience = experiences.filter(exp => exp.id === id)
    const request = debounce(API.put, 1000)
    request(`/resume/${resumeId}/experiences/${id}`, experience)
  }, [experiences])




  return (
    <div className="pt-4">
      <div className="flex justify-between items-center ">
        <h2>Experiencias</h2>
        <AddAndCollpaseButton
          data={experiences.length}
          active={active}
          onDataRequest={create}
          onActive={(e) => setActive((active) => !active)}
        />
      </div>
      <div>
        { experiences.length ? 
        experiences.map(
          (experience, index) =>
            active && (
              <form key={experience?.id}>
            
                <p className="text-sm text-gray-500 pt-4">
                  Experiencia {index + 1}
                </p>
                <div className="flex gap-4">
             
                  <Input
                    label="Profissao"
                    name="role"
                    id="role"
                    placeholder="Ex: Programador"
                    value={experience?.role as string }
                    onChange={e => update(e, experience)}
                  />
                  <Input
                    label="Empresa"
                    name="company"
                    id="company"
                    placeholder="Ex: Makrosystem"
                    value={(experience?.company as string) }
                    onChange={e => update(e, experience)}
                  />
                </div>
                <div className="grid grid-row-2 grid-cols-4 ">
                 
                  <label className="text-sm text-gray-400 font-medium col-span-2 row-span-1">Data Inicio</label>
                  <label className="text-sm text-gray-400 font-medium col-span-2 row-span-1">Data Final</label>
                  <div className="w-full flex col-span-4 gap-4">
                  <Select options={years}/>
                  <Select options={months}/>               
                  <Select options={years}/>
                  <Select options={months}/>
                  </div>
                </div>
                <TextArea
                  label="Descricao"
                  name="description"
                  id="description"
                  placeholder="Ex: I working with frontend develop"
                  value={(experience?.description as string) }
                />
              </form>

            )
        ) : null}
        {active && (
          <div className="flex justify-end mt-4">
            <button
              className="bg-green-field  text-white px-1 py-1  font-medium text-sm rounded flex items-center gap-2 group "
              onClick={create}
            >
              <FiPlus size={20} className="group-hover:rotate-90 transition" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
