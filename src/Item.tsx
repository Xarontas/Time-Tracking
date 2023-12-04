import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Item({ daily, weekly, monthly, hours, error, isLoading }: { daily: boolean, weekly: boolean, monthly: boolean, hours: any[], error: boolean, isLoading: boolean }) {

    const colors: string[] = ['#ff8c66', '#56c2e6', '#ff5c7c', '#4acf81', '#7536d3', '#f1c65b'];
    const icons: string[] = ['icon-work.svg', 'icon-play.svg', 'icon-study.svg', 'icon-exercise.svg', 'icon-social.svg', 'icon-self-care.svg'];

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', maxWidth: '700px' }}>
                {isLoading && <strong>is loading...</strong>}
                {error && <mark>Error: Απετυχε η προσβαση στον Server</mark>}

                {/* To index ειναι σημαντικο για να εχει ξεχωριστο background και ειναι εγγενες της map */}
                {
                    hours.map((hour: any, index) => (

                        <div className="item-wrapper" style={{ backgroundColor: colors[index] }} key={hour['title']}>
                            <img src={icons[index]} alt="icon" className="item-icon" />
                            <div className="item-txt">
                                <div className="item-title">
                                    <div>{hour['title']}</div>

                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            ...
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>D: {hour.timeframes.daily['current']}hrs</Dropdown.Item>
                                            <Dropdown.Item>W: {hour.timeframes.weekly['current']}hrs</Dropdown.Item>
                                            <Dropdown.Item>M: {hour.timeframes.monthly['current']}hrs</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>

                                <div className="item-time">
                                    {daily &&
                                        <div className="item-stats">
                                            <div className="item-hours">{hour.timeframes.daily['current']}hrs</div>
                                            <div className="item-last-time ">Last day: {hour.timeframes.daily['previous']}hrs</div>
                                        </div>
                                    }

                                    {weekly &&
                                        <div className="item-stats">
                                            <div className="item-hours">{hour.timeframes.weekly['current']}hrs</div>
                                            <div className="item-last-time ">Last week: {hour.timeframes.weekly['previous']}hrs</div>
                                        </div>
                                    }

                                    {monthly &&
                                        <div className="item-stats">
                                            <div className="item-hours">{hour.timeframes.monthly['current']}hrs</div>
                                            <div className="item-last-time ">Last month: {hour.timeframes.monthly['previous']}hrs</div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
        </>
    )
}