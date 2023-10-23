// nested JSX must return a single element;
// This one parent element would wrap all of the other levels of nested elements; several JSX elements written as siblings with no parent wrapper element will not transpile

const JSX = <div>
<h1>Doc</h1>
<p>Unordered List</p>
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
</div>