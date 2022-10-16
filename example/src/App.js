import { useForm } from "react-hook-form";
import { User } from "./domain/user";
import { herbsValidationResolver } from "herbs-react-hook-form"

import logo from './logo.svg';
import './App.css';

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: herbsValidationResolver(User)
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h1>React Hook Form optimized Herbs Resolver</h1>
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input {...register("name")} placeholder="(ex: John)" />
          {errors?.name && <p>{errors?.name?.message}</p>}

          <label>Age</label>
          <input {...register("age")} placeholder="(+21)" />
          {errors?.age && <p>{errors?.age?.message}</p>}

          <label>City</label>
          <input {...register("city")} placeholder="(ex: New York)" />
          {errors?.city && <p>{errors?.city?.message}</p>}

          <label>Street</label>
          <input {...register("street")} />
          {errors?.street && <p>{errors?.street?.message}</p>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
