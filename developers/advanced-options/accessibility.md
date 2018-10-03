# Accessibility

Visitors are able to navigate and view your schedule using their keyboard. They can `TAB` through \[activities\]\({{&lt; relref "basic-structure.md\#activity" &gt;}}\) and hit `SPACE` or `ENTER` to select one. Pressing `L` will favorite the selected activity. Hitting `CMD + P` and `CTRL + P` will \[print your schedule\]\({{&lt; relref "print.md" &gt;}}\).

This feature is turned on by default and can be turned off by setting `data-accessibility`.

| Options | Values | Default value |
| :--- | :--- | :--- |
| data-accessibility | true / false | true |

### Code example

```markup
<script defer 
    src='https://themes.blokks.co/default/2.1.5/main.js' 
    data-blokks-id='6kga8pkdj432' 
    data-accessibility='false'>
</script>
```



