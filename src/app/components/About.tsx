const About = () => {
  return (
    <div className="max-w-[1100px] mx-auto mt-[60px] pl-8">
      <div className="flex flex-col gap-y-6">
        <h1 className="text-3xl font-semibold">
          Привет, я парикмахер <span className="text-[green]">Байыр</span>
        </h1>
        <div className="text-lg font-medium text-gray-700 text-right">
          <p>
            Адрес: <span>Абдрахманова</span> <span>142</span>
          </p>
          <p>
            Выходной день: <span>Воскресение</span>
          </p>
          <p>
            График работы: <span>От: 11:00 До 23:00</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
