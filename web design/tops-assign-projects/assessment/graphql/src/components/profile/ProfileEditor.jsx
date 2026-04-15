import { useState } from "react";

export default function ProfileEditor({ profile, setProfile }) {
  const [form, setForm] = useState(profile);

  const handleSave = () => {
    setProfile(form);
  };

  return (
    <div>
      <input
        value={form.name}
        onChange={(e)=>setForm({...form,name:e.target.value})}
        placeholder="Name"
      />
      <input
        value={form.bio}
        onChange={(e)=>setForm({...form,bio:e.target.value})}
        placeholder="Bio"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}