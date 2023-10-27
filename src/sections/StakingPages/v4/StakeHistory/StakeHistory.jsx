import StakeHistoryStyleWrapper from "./StakeHistoryStyleWrapper.style"
import headingShape from 'assets/images/icons/steps.png'

const StakeHistory = () => {
    return (
        <StakeHistoryStyleWrapper id="schedule">
            <h3 className="widget_title">FUND HISTORY <img src={headingShape} alt="shape" /></h3>

            <div className="schedule_table">
                <table>
                    <tbody>
                        <tr className="table-header">
                            <th>NO.</th>
                            <th>Wallet Address</th>
                            <th>ENSC</th>
                            <th>Pool</th>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>0x4AB6166A6331365cF7832496BA107495f70b061a</td>
                            <td>0.641</td>
                            <td><button>View Transaction</button></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>0x4AB6166A6331365cF7832496BA107495f70b061a</td>
                            <td>0.641</td>
                            <td><button>View Transaction</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </StakeHistoryStyleWrapper>
    )
}

export default StakeHistory;