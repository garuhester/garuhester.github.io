html:
```
<input type="text" class="input" placeholder="hello">
<textarea class="textarea" placeholder="hello"></textarea>
```

css:
```
/* 全局样式 */
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #ddd;
}
input:-moz-placeholder, textarea:-moz-placeholder {
    color:#ddd;
}
input::-moz-placeholder, textarea::-moz-placeholder {
    color:#ddd;
}
input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color:#ddd;
}

/* 指定类名 */
input[class='input']::-webkit-input-placeholder, textarea[class='textarea']::-webkit-input-placeholder {
    color: #ddd;
}
input[class='input']:-moz-placeholder, textarea[class='textarea']:-moz-placeholder {
    color:#ddd;
}
input[class='input']::-moz-placeholder, textarea[class='textarea']::-moz-placeholder {
    color:#ddd;
}
input[class='input']:-ms-input-placeholder, textarea[class='textarea']:-ms-input-placeholder {
    color:#ddd;
}
```
