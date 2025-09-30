// Go over the two HTML snippets. How many nodes will the resulting DOM tree
// have?

/*
<div>
  <p>Then press the <em>Draw</em> button</p>
</div>

VS:

<div><p>Then press the <em>Draw</em> button.</p></div>

document => html => head
              \>
                body => div
                \> TEXT (only in the first example)
                \> p -> text
                    \> em -> text
                \> TEXT (only in the first example)

11 and 9
*/