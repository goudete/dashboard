import React from 'react';

import './stripe.scss';

const StripeTest = () => {
  const [accountId, setAccountId] = React.useState(null);
  const [stripeAccountCapabilites, setStripeAccountCapabilities] = React.useState(null);
  const [financialAccountId, setFinancialAccountId] = React.useState(null);
  const [financialAccount, setFinancialAccount] = React.useState(null);
  const [fundFinancialAccountResponse, setFundFinancialAccountResponse] = React.useState(null);
  
  const createUser = () => {
    fetch('http://localhost:3001/createStripeUser', {method: 'POST', mode: 'cors'})
      .then((response) => response.json())
      .then((data) => {
        setAccountId(data.id);
      })
  }

  const getStripeAccountCapabilities = (stripeAccountId: string) => {
    fetch(`http://localhost:3001/getStripeAccountCapabilities/${stripeAccountId}`, {method: 'GET', mode: 'cors'})
      .then((response) => response.json())
      .then((data) => {
        setStripeAccountCapabilities(data);
      })
  }

  const createFinancialAccount = (stripeAccountId: string) => {
    fetch(`http://localhost:3001/createStripeFinancialAccount/${stripeAccountId}`, {method: 'POST', mode: 'cors'})
      .then((response) => response.json())
      .then((data) => {
        setFinancialAccountId(data.id);
      })
  }

  const getFinancialAccount = (stripeAccountId: string, financialAccountId: string) => {
    fetch(`http://localhost:3001/getStripeFinancialAccount/${stripeAccountId}/${financialAccountId}`, {method: 'GET', mode: 'cors'})
      .then((response) => response.json())
      .then((data) => {
        setFinancialAccount(data);
      })
  }

  const fundFinancialAccount = (stripeAccountId: string, financialAccountId: string) => {
    fetch(`http://localhost:3001/fundFinancialAccount/${stripeAccountId}/${financialAccountId}`, {method: 'POST', mode: 'cors'})
      .then((response) => response.json())
      .then((data) => {
        setFundFinancialAccountResponse(data);
      })
  }

  return <div className="stripe">
    <button onClick={createUser}>Create User</button>
    <br/>
    {accountId && <><p>Stripe account ID: </p><pre>{accountId}</pre></>}
    {accountId && 
        <>
        <button onClick={() => getStripeAccountCapabilities(accountId)}>Get account capabilities</button>
        <br/>
        {stripeAccountCapabilites && <pre>{JSON.stringify(stripeAccountCapabilites)}</pre>}
        {stripeAccountCapabilites && 
            <>
            <button onClick={() => createFinancialAccount(accountId)}>Create financial account</button>
            <br/>
            {financialAccountId && <><p>Stripe financial account ID: </p><pre>{financialAccountId}</pre></>}
            {financialAccountId && 
                <>
                <button onClick={() => getFinancialAccount(accountId, financialAccountId)}>Get financial account</button>
                <br/>
                {financialAccount && <pre>{JSON.stringify(financialAccount)}</pre>}
                {financialAccount &&
                    <>
                    <button onClick={() => fundFinancialAccount(accountId, financialAccountId)}>Fund financial account</button>
                    <br/>
                    {fundFinancialAccountResponse && <pre>{JSON.stringify(fundFinancialAccountResponse)}</pre>}
                    </>
                }
                </>
            }
            </>
        }
        </>
    }
  </div>;
}



export default StripeTest;