# Sample code to query user by id using mybatis

mapper xml 
```xml
<select id="queryUserById" parameterType="long" resultType="User">
    SELECT
        *
    FROM
        user
    WHERE
        user_id = #{userId}
</select>
```

Java mapper interface
```java
User queryUserById(@Param(value="userId")long id);
```

| Name    | Description |
| ------- |:-----------:|
| id      | unique id to reference method in mapper interface |
| parameterType | optional attribute([MyBatis can calculate the TypeHandler to use out of the actual parameter passed to the statement](http://www.mybatis.org/mybatis-3/sqlmap-xml.html)) |


# Single Parameter Type Usage
parameterType="long" -> types of all parameters should all be long


# Multiple Parameter Type Using Map
```xml
<select id="queryUser" parameterType="Map" resultType="User">
    SELECT
        *
    FROM
        user
    WHERE
        user_id = #{userId} and username = #{username}
</select>
```

```java
Map<String,String> map=new HasMap<String,String>();
map.put("userId","2");
map.put("username", "name");

User queryUser(map);
```
# Multiple Parameter Type Using Annotation
(note: if you only have one parameter and it's Javabean, you can skip the annotation)
```xml
<select id="queryUser" resultType="User">
    SELECT
        *
    FROM
        user
    WHERE
        user_id = #{userId} and username = #{username}
</select>
```

```java
User queryUser(@Param(value="userId") long id, @Param(value="username") long username);
```

# difference between #{} and ${}

you can pass parameter using #{} and ${} in mapper xml

| Name    | Description |
| ------- |:-----------:|
| #{...}  | a parameter marker in a JDBC prepared statement |
| ${...}  | string substitution |

### Note:
use of ${...} (string substitution) presents a risk for SQL injection attacks. Also, string substitution can be problematical for complex types like dates. For these reasons, mybatis recommends using the #{...} form whenever possible. [link](https://github.com/mybatis/mybatis-3/wiki/FAQ)


# ResultType and ResultMap Usage

resultType="User" -> return User object or list of User objects
if you only want some of the data in user pojo, you can use resultMap to get subset data in User data
``` xml
<resultMap id="userResultMap" type="User">
  <id property="userId" column="user_id" />
  <result property="username" column="username"/>
  <result property="password" column="password"/>
</resultMap>

<select id="selectUsers" resultMap="userResultMap">
  select user_id, username, password
  from user
  where id = #{userId}
</select>
```


