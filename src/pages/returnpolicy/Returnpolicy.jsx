import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';

function Returnpolicy() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div className=" w-full px-10">
      <Link to={'/'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>
     
     <h1 className=' text-center  text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>
                           E-COMMERCE</h1>
                           </Link><br></br>
<center><div><h1><strong>
Returnpolicy
</strong>

</h1>
     <br></br> 
      </div>
          </center> 

      <div>
        <h1><strong>RETURNS </strong></h1>
<p>We have a 7-day return policy, which means you have 7 days after receiving your item to request a return.
</p>
<p>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original
packaging. You'll also need the receipt or proof of purchase.
</p>
<p>To start a return, you can contact us at rajuchatterjeeofficial@gmail.com. 
Please note that returns will need to be sent to the following address:
west Bengal, india, North 24 Parganas, WB, 123456, India
</p>
<p>If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent
back to us without first requesting a return will not be accepted. Please note that if your country of residence is not India, shipping your goods
may take longer than expected.
</p>
<p>You can always contact us for any return questions at rajuchatterjeeofficial@gmail.com.
</p><br></br>
<h1><strong>Damages and Issues</strong></h1>

<p>Please inspect your order upon receipt and contact us immediately if the item is defective, damaged, or if you receive the wrong item, so that
we may evaluate the issue and make it right.
Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or
personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable
liquids, or gases. Please get in touch if you have questions or concerns about your specific item.
</p>
<p>Unfortunately, we cannot accept returns on sale items or gift cards.
</p>
<br></br>
<h1><strong>Exchanges</strong></h1>

<p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for
the new item.</p>

<p>European Union 3 day cooling off period
Notwithstanding the above, if merchandise is being shipped into the European Union, you have the right to cancel or return your order within 3
days for any reason and without justification. As above, your item must be in the same condition that you received it, unworn or unused, with
tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
</p><br></br>
<h1><strong>Refunds</strong></h1>

<p>We will notify you once we’ve received and inspected your return to let you know if the refund was approved or not. If approved, you’ll be
automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or
credit card company to process and post the refund too.
</p><br></br>
<h1><strong>If more than 7 business days have passed since we’ve approved your return, please contact us at rajuchatterjeeofficial@gmail.com</strong></h1>
<br></br>
<br></br>
<Link to={'/'} className="text-blue-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>
    Back to Home</Link><br></br><br></br>
      </div>
    </div>
  )
}

export default Returnpolicy