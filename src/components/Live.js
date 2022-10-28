import React from "react";

const Live = () => {
  return (
    <section>
      <h1 className="p-4 text-center text-light">Live</h1>

      <div className="container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Event</th>
              <th scope="col">Venue</th>
              <th scope="col">Location</th>
              <th scope="col">Tickets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">THU 2 JUN 2022</th>
              <td>Forge Ahead Festival 2022</td>
              <td>The Patriot</td>
              <td>Crumlin, UK</td>
              <td>
                <a
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fhome-of-rock.co.uk%2Fevents%2Fforge-ahead-festival-day-one%2F%3Ffbclid%3DIwAR2hD6ttELGHOdpb-uBzwfDF9rRYvS1HOHL3XxpTM7CuaOlFkmjqAZxkOK8&h=AT1QQvSRVcWNH9jertZ0BBsi4OETXNzmic_LIe26JvuL5jF2GFRlSm25R6AQ7JuioIB6jmMJBc9xLNfqIMcRSyDhf8o0uMHnzktaRMQw-2ZkQeckm1r9ck49BQS5FQuaSr468jg&__tn__=-UK-R&c[0]=AT3kwyOHamSs9XpJQ0iHiACJNCWj93gvobK_Yuly0sVk2bC8D71kGYqGFv4OVWcCql3XqwlAZqHBNkco-0Ta07fmtjMATDVMoo4Jc7XVF5X13O41kV3Qt3dljPx4ctA4F0Yhkwh1W946T-1aiAGBVKw-gJ_90dHhiCGymZjePBMnyw"
                  target="_blank"
                >
                  <button type="button" className="btn btn-primary">
                    Tickets
                  </button>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">SUN 24 JUL 2022</th>
              <td>World's Larget Female Biker Meet</td>
              <td>The Triumph Factory Visitor Experience</td>
              <td>Hinckley, UK</td>
              <td>
                <a
                  href="https://www.eventbrite.co.uk/e/worlds-largest-female-biker-meet-24th-july-2022-registration-tickets-261821614497"
                  target="_blank"
                >
                  <button type="button" className="btn btn-primary">
                    Tickets
                  </button>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">WED 10 AUG 2022</th>
              <td>MASSIVE - Drinkin Beers N Smashin Ears in 21 UK Tour</td>
              <td>Fuel Rock Club</td>
              <td>Cardiff, UK</td>
              <td>
                <a
                  href="https://www.seetickets.com/event/massive-cardiff/fuel-rock-club/1572935?fbclid=IwAR0c4OroVSjGVZRtkJ9NtDwGeyGPxOsvWrRWxgDLKkQyqZ8q8Guxw3EzTog"
                  target="_blank"
                >
                  <button type="button" className="btn btn-primary">
                    Tickets
                  </button>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">SAT 20 AUG 2022</th>
              <td>Rockmantic Festival</td>
              <td>Lincoln Drill Hall</td>
              <td>Lincoln, UK</td>
              <td>
                <a
                  href="https://www.lincolndrill.co.uk/whats-on/rockmantic-weekender/"
                  target="_blank"
                >
                  <button type="button" className="btn btn-primary">
                    Tickets
                  </button>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">FRI 20 JAN 2023</th>
              <td>Bootleg Ball</td>
              <td>Butlins</td>
              <td>Minehead, UK</td>
              <td>
                <a
                  href="https://www.bigweekends.com/bootleg-ball-minehead-200123"
                  target="_blank"
                >
                  <button type="button" className="btn btn-primary">
                    Tickets
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Live;
