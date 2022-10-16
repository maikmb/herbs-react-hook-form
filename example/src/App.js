import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { entity, field } from "@herbsjs/gotu"

import logo from './logo.svg';
import './App.css';

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();

const User = entity('User', {
  firstName: field(String, {
    validation: {
      presence: true
    }
  }),
  age: field(String, {
    validation: {
      presence: true,
      length: { minimum: 6 }
    }
  })
})

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);


  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h1>React Hook Form optimized Herbs Resolver</h1>
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input {...register("name")} placeholder="(ex: John)" />
          {errors.name && <p>{errors.name.message}</p>}

          <label>City</label>
          <input {...register("city")} placeholder="(ex: New York)" />
          {errors.city && <p>{errors.city.message}</p>}

          <label>Street</label>
          <input {...register("street")} />
          {errors.street && <p>{errors.street.message}</p>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
