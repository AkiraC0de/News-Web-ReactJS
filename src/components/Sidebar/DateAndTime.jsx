const DateAndTime = () => {
	const DATE = new Date().toDateString();
  const TODAY = DATE.slice(4, 20);
	const WEEKDAY = DATE.slice(0, 3);

  return (
    <div className="flex flex-col">
        <h2 className="text-md text-black-text font-meduim leading-none font-helvatica ">{TODAY}</h2>
        <h4 className="text-sm leading-none text-gray-text ">{WEEKDAY}</h4>
    </div>
  )
}
export default DateAndTime