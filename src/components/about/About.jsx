import React from 'react'

const styles = {
  text: {
    lineHeight: '2em',
    textAlign: 'center',
    fontSize: '1.3em'
  }
}

export default function About() {
  return (
    <div className="py-5">
      <h3 className="text-center h2 mb-4 font-weight-bold">About</h3>
      <p style={styles.text}>Junior Web developer able to build a Web presence <br /> from the ground up - concept, navigation, usability, adaptability, responsive layout and programming. <br /> Fast learner, hard worker and team player.</p>
    </div>
  )
}
