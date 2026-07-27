# Why does `console.log(element)` show the updated `textContent` even when it is logged before `textContent` is assigned?

### Answer

`console.log()` runs **synchronously**, but **Chrome DevTools stores a reference to the object, not a snapshot of its current state**.

When the object is modified later, DevTools follows the same reference and displays the object's **latest state** when you inspect it.

> **Important:** This is **DevTools behaviour**, not asynchronous JavaScript.

---

## Execution Flow

```text
Step 1
───────────────
const element = document.createElement("h1");

element
   │
   ▼
┌─────────────────────┐
│ <h1></h1>           │
└─────────────────────┘
```

↓

```text
Step 2
───────────────
console.log(element);

Console stores:
        │
        ▼
 Reference (01X35Sd) ───┐
                        │
                        ▼
┌─────────────────────┐
│ <h1></h1>           │
└─────────────────────┘
```

↓

```text
Step 3
───────────────
element.textContent = "Hello";

Same object is modified

┌────────────────────────────┐
│ <h1>Hello</h1>             │
└────────────────────────────┘
```

↓

```text
Step 4
───────────────
DevTools displays the object

Reference
    │
    ▼
┌────────────────────────────┐
│ <h1>Hello</h1>             │
└────────────────────────────┘
```

---

## Key Points

* `console.log()` is **synchronous**.
* A DOM element is an **object (reference type)**.
* `console.log()` passes a **reference** to DevTools.
* `textContent` modifies the **same object**.
* DevTools often displays the **latest state** of that object instead of the state at the moment of logging.
* This behaviour is **not related to async/await, Promises, or the Event Loop**.

### Keywords to Remember

* Reference Type
* Object Reference
* Live Object Inspection
* Snapshot vs Reference
* Chrome DevTools Behaviour


---


Question
Why do we use square brackets ([]) to access object properties, and how is it different from array indexing?

Square brackets always mean "look up something."

For arrays, JavaScript looks up by index.
For objects, JavaScript looks up by property name (key).

The reason we use [] with objects is that the property name can be dynamic (stored in a variable or computed at runtime), whereas dot notation (.) only works with fixed property names.

---

Here's a concise note you can save.

---

# Question

### What is the difference between `append()` and `appendChild()`?

## Answer

Both methods add content to the DOM, but they differ in what they accept and what they return.

| `appendChild()`                   | `append()`                             |
| --------------------------------- | -------------------------------------- |
| Accepts only **one DOM Node**     | Accepts **multiple Nodes and strings** |
| Returns the appended node         | Returns `undefined`                    |
| Cannot append plain text directly | Can append plain text directly         |

---

## Example

### `appendChild()`

```js
const h1 = document.createElement("h1");

const result = document.body.appendChild(h1);

console.log(result); // <h1></h1>
```

**Returns the appended node.**

---

### `append()`

```js
const h1 = document.createElement("h1");

const result = document.body.append(h1, "Hello");

console.log(result); // undefined
```

**Returns `undefined`.**

---

## Why does `append()` return `undefined`?

Because `append()` can append **multiple items**.

```js
document.body.append(h1, p, "Hello");
```

If it returned a value, what should it return?

* `h1`?
* `p`?
* `"Hello"`?
* An array?

There is no single correct return value, so the method simply returns **`undefined`**.

---

## Should I avoid `undefined`?

No. `undefined` is **not an error**—it is the expected return value.

If you don't need the return value, just write:

```js
document.body.append(h1);
```

instead of

```js
const result = document.body.append(h1);
```

If you need the appended node, use:

```js
const result = document.body.appendChild(h1);
```

---

## Key Points

* Use **`append()`** when you only want to add content to the DOM.
* Use **`appendChild()`** when you need the appended node as the return value.
* `append()` is more flexible because it accepts **multiple nodes and strings**.
* `appendChild()` is stricter because it accepts **only one DOM node**.
