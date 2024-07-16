import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="container" id="schedule">
      <h2 className="title stroke-text">Raspored</h2>
      <p className="text sub-title">
        Izaberi svoj idealni plan treninga - ceo raspored MMA i BJJ časova.
      </p>
      <div className="flex">
        <div className="colors">
          <div className="timetable Timetable_isBegginerFriendly__scO4E"></div>
          <p className="text">Prilagođeno početnicima</p>
        </div>
        <div className="colors">
          <div className="timetable Timetable_isAllLevelsFriendly__1oqxc"></div>
          <p className="text">Za sve nivoe</p>
        </div>
      </div>
      <div className="scroll-container">
        <div
          style={{ overflow: "scroll" }}
          className="mantine-ScrollArea-viewport"
        >
          <div style={{ minWidth: "100%", display: "table" }}>
            <div className="mantine-TableScrollContainer-scrollContainerInner">
              <table className="table">
                <thead>
                  <tr>
                    <th>Ponedeljak</th>
                    <th>Utorak</th>
                    <th>Sreda</th>
                    <th>Četvrtak</th>
                    <th>Petak</th>
                    <th>Subota</th>
                    <th>Nedelja</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="table-text Timetable_isAllLevelsFriendly__1oqxc">
                        BJJ
                        <br />
                        07:00 - 08:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isAllLevelsFriendly__1oqxc">
                        BJJ
                        <br />
                        07:00 - 08:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isAllLevelsFriendly__1oqxc">
                        BJJ
                        <br />
                        07:00 - 08:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isAllLevelsFriendly__1oqxc">
                        BJJ
                        <br />
                        07:00 - 08:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isAllLevelsFriendly__1oqxc">
                        BJJ
                        <br />
                        07:00 - 08:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isAllLevelsFriendly__1oqxc">
                        BJJ
                        <br />
                        07:00 - 08:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isAllLevelsFriendly__1oqxc">
                        BJJ
                        <br />
                        07:00 - 08:15
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        Kickbox
                        <br />
                        18:00-19:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        BJJ
                        <br />
                        18:00-19:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        Kickbox
                        <br />
                        18:00-19:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        BJJ
                        <br />
                        18:00-19:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        Kickbox
                        <br />
                        18:00-19:15
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        Školica sporta
                        <br />
                        12:00-13:00
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        Školica sporta
                        <br />
                        12:00-13:00
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        MMA
                        <br />
                        19:30-20:45
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        Deca
                        <br />
                        19:30-20:45
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        MMA
                        <br />
                        19:30-20:45
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        Deca
                        <br />
                        19:30-20:45
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        MMA
                        <br />
                        19:30-20:45
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        Deca + Roditelji
                        <br />
                        14:00-15:30
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isBegginerFriendly__scO4E">
                        Deca + Roditelji
                        <br />
                        14:00-15:30
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <p className="table-text Timetable_isAllLevelsFriendly__1oqxc">
                        Open mat
                        <br />
                        16:00-18:00
                      </p>
                    </td>
                    <td>
                      <p className="table-text Timetable_isAllLevelsFriendly__1oqxc">
                        BJJ workshop
                        <br />
                        18:00-19:15
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
