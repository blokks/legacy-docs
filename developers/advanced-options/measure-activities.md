# Measure activities

Blokks adds [CSS modifiers](../../designers/custom-themes/naming-convention.md) to indicate the size of each _Activity_. This is useful for determining, for example, if the activity is large enough to show a subtitle. Or, if an activity title should be truncated if the activity is too small to show the full title.

{% hint style="danger" %}
Computing the size of an element is a pretty intensive task for your browser. Although this option is enabled by default, we recommend to set it to `false` whenever possible. Read [Performance optimizations](../performance-optimization.md) for more information.
{% endhint %}

| Options | Values | Default value |
| :--- | :--- | :--- |
| `data-auto-measure-size` | `true` / `false` | `true` |

```markup
<script defer 
    src='https://themes.blokks.co/default/2.2.0/main.js' 
    data-blokks-id='6kga8pkdj432'
    data-measure-activities='false'>
</script>
```



