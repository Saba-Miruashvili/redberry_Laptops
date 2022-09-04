import { useEffect, useState } from "react";

 function Date (props) {
  const [date, setDate] = useState();
  const [valid, setValid] = useState(false);

  useEffect(() => {
    // regex for DD-MM-YYYY
    const regexddmmyyyy = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

    if (regexddmmyyyy.test(date)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [date]);

  const handleChanged = (e) => {
    setDate(e.target.value);
  };
  return (
    <div id="DateDiv">
        <p id="fullname">შეძენის რიცხვი (არჩევითი)</p>
      <input id="Date" type="text" placeholder={props.placeholder} onChange={handleChanged} />
    </div>
  );
}
export default Date;
