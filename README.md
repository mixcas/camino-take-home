# Camino Financial's Frontend Take Home Project
## Carlo Solares

For this assignment I'm using React + Redux. It is a simple responsive form with very basic validation. Noramlly for validation I would have used. Noramlly for for the form and validation I woudl have used somethink like `redux-form-validators` but in this case I wanted to do everything by hand.

Redux is managing all the state for the help drawer and the form and the current step. In my opinion theres no need for redux here at all. It could have been done with only `useState`. I decied to keep the forms state (`formValues`) inside the `Step` reducer, thinking that maybe *all* values would be sent together at the end of Setep 3.

Most styles are divided per component but not all. The most general ones are in `App.css` along with some utility classes.

### Thanks
