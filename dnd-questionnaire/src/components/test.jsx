import React, { useState } from 'react';

function Example() {
  const [showForm, setShowForm] = useState(false);

  const showMyForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div>
      <form>
        <button onClick={showMyForm}></button>
      </form>

      {showForm && (
        <form>
          hello
        </form>
      )}
    </div>
  )
}

export default Example