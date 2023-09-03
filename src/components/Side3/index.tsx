import Weather from '../Weather'
import ToDo from '../ToDo'
import View from '../View'
import News from '../News'

const index = () => {

  return (
    <div className="flex flex-col gap-6 flex-1 lg:grid max-lg:grid-cols-2 max:lg:w-[100vw]">
      <Weather/>
      <ToDo/>
      <View/>
      <News/>
    </div>
  );
};

export default index;
