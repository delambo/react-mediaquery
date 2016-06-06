
# React Media Query

A React.js experiment that lets you write declarative media queries in your jsx. A new `Responsive` container component will apply the given class names to its child components when the correspoding media queries are matched. This would pair well with CSS Modules.

## Example Usage

```js
  render() {
    return (

      <Responsive media={{
        '(min-width: 600px)': 'medium-content',
        '(min-width: 900px)': 'large-content,
        '(min-width: 1200px)': 'xlarge-content',
      }}>
        <div class="small-content">
          ...
        </div>
      </Responsive>

    );
  }
```

## Example

Check out the [example](https://github.com/delambo/react-mediaquery/blob/master/example) which uses applies CSS Modules.

## Status

"It works" but I'm abandoning this project since there is potential for a FOUC on the first mount depending on whether or not a media query is matched and styles are applied. The code is still a little rough, I didn't get to writing tests, and I'm not using it for anything. Please let me know if you have any ideas.
