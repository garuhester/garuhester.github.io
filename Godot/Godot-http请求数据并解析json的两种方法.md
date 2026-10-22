```
func _ready():
    $HttpRequest.connect("request_completed", self, "_on_HttpRequest_completed")
    $HttpRequest.request("http://127.0.0.1/user") # {name:"hester",age:20}
    pass 

func _on_HttpRequest_completed(result, response_code, headers, body):
    # 方法一
    var json1 = JSON.parse(body.get_string_from_utf8())
    print(json1.result[0].name)
    print(json1.result[0].age)
    # 方法二
    var json2 = parse_json(body.get_string_from_utf8())
    print(json2[0].name)
    print(json2[0].age)
    pass
```
