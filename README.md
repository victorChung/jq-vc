![avatar](lib/static/images/h.png)
![avatar](lib/static/images/v.png)

---

### npm

* `npm install --save jq-vc`

#### use

* `import 'jq-vc/lib/static/style/tree.css';`
* `import vc from 'jq-vc';`

```
##### html 
	<div class="org-tree-container hh">
	<div class="org-tree-container vv">

##### js
	vc.tree({elem: '.hh'})
	vc.tree({elem: '.vv', direction: 'v'})
    
```

---

---

### html
#### use

```
##### head 

<script src="./jquery-1.9.1.min.js"></script>
<script src="../static/jq-vc.js"></script>
<link rel="stylesheet" href="../static/style/tree.css">

##### body

<script>
$(function () {
  vc.tree({elem: '.hh'})
  vc.tree({elem: '.vv', direction: 'v'})
})
</script>

```
---


### params
*  `elem` string, default ' ', the init element, eg #id or .class
*  `max_width` number, default 300, unit -> px, the max width of item, eg 200 or 500
*  `dierction` 'v | h', default 'h'
*  `width_ratio` number, deafult 24, item width = item.text().length * width_ratio, beyond max_width
*  `item_gap` number, default 8, margin between items

```
      var _params = {
        elem: '',
        max_width: 300,
        direction: 'h',  // h for horizontal, v for vertical
        width_ratio: 24,
        item_gap: 8,
        ...params
      }
```


#!!!
```
if the node just one child
```