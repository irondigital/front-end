import React from "react";

 function Form() {
  return (
    <>  
    <div classname="alqr alqy alrf alro alrq alwc alwg">
            <div classname="alvy">
              <label for="first-name" classname="alqp altf alth altq">First name</label>
              <div classname="alqk">
                <input id="first-name" type="text" name="first-name" autocomplete="given-name" classname="alqp alqx alrx alsm alsp alss altc altq altx alty alua aluj alvg alvh alvi alwf"/>
              </div>
            </div>
            <div classname="alvy">
              <label for="last-name" classname="alqp altf alth altq">Last name</label>
              <div classname="alqk">
                <input id="last-name" type="text" name="last-name" autocomplete="family-name" classname="alqp alqx alrx alsm alsp alss altc altq altx alty alua aluj alvg alvh alvi alwf"/>
              </div>
            </div>

            <div classname="alvz">
              <label for="email" classname="alqp altf alth altq">Email address</label>
              <div classname="alqk">
                <input id="email" type="email" name="email" autocomplete="email" classname="alqp alqx alrx alsm alsp alss altc altq altx alty alua aluj alvg alvh alvi alwf"/>
              </div>
            </div>

            <div classname="alvy">
              <label for="country" classname="alqp altf alth altq">Country</label>
              <div classname="alqk alqr alrf">
                <select id="country" name="country" autocomplete="country-name" classname="alqg alqh alqx alre alrx alsm alss alsx alta altc altq altx alty alua aluc alvg alvh alvi alwf">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" classname="alqc alqg alqh alqo alqu alrs alru altk alwb">
                  <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
              </div>
            </div>

            <div classname="alqf">
              <label for="street-address" classname="alqp altf alth altq">Street address</label>
              <div classname="alqk">
                <input id="street-address" type="text" name="street-address" autocomplete="street-address" classname="alqp alqx alrx alsm alsp alss altc altq altx alty alua aluj alvg alvh alvi alwf"/>
              </div>
            </div>

            <div classname="alvx alwa">
              <label for="city" classname="alqp altf alth altq">City</label>
              <div classname="alqk">
                <input id="city" type="text" name="city" autocomplete="address-level2" classname="alqp alqx alrx alsm alsp alss altc altq altx alty alua aluj alvg alvh alvi alwf"/>
              </div>
            </div>

            <div classname="alvx">
              <label for="region" classname="alqp altf alth altq">State / Province</label>
              <div classname="alqk">
                <input id="region" type="text" name="region" autocomplete="address-level1" classname="alqp alqx alrx alsm alsp alss altc altq altx alty alua aluj alvg alvh alvi alwf"/>
              </div>
            </div>

            <div classname="alvx">
              <label for="postal-code" classname="alqp altf alth altq">ZIP / Postal code</label>
              <div classname="alqk">
                <input id="postal-code" type="text" name="postal-code" autocomplete="postal-code" classname="alqp alqx alrx alsm alsp alss altc altq altx alty alua aluj alvg alvh alvi alwf"/>
              </div>
            </div>
          </div>
    </>
  )
}
export default Form;