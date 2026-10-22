#DrawerLayout+Toolbar实现
导入material design 组件
>'com.android.support:design:25.0.1'

* 主布局：

```
<android.support.v4.widget.DrawerLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/drawerlayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fitsSystemWindows="true"
    tools:context="com.example.hester.aaaaaa.MainActivity"
    tools:openDrawer="start">

    <!--主界面-->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:fitsSystemWindows="true"
        android:orientation="vertical">

        <android.support.design.widget.AppBarLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content">

            <android.support.v7.widget.Toolbar
                android:id="@+id/toolbar"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"></android.support.v7.widget.Toolbar>
        </android.support.design.widget.AppBarLayout>

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="hello world"
            android:textSize="30dp" />
    </LinearLayout>

    <!--侧滑界面-->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_gravity="start"
        android:background="#ffffff"
        android:fitsSystemWindows="true">

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="新闻头条"
            android:textSize="30dp" />
    </LinearLayout>

</android.support.v4.widget.DrawerLayout>
```

* 主界面初始化ToolBar

```
public class MainActivity extends AppCompatActivity {

    Toolbar toolbar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
    }
}
```

* 添加NoActionBar主题（values/styles.xml）

```
<style name="AppTheme.NoActionBar">
        <item name="windowActionBar">false</item>
        <item name="windowNoTitle">true</item>
</style>
```

* 设置主布局的主题为NoActionBar
![snipaste20170314_221750.png](http://upload-images.jianshu.io/upload_images/2381669-33deb4f3a953778a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* AndroidManifest.xml中将主题改为AppTheme.NoActionBar

```
<application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:supportsRtl="true"
        android:theme="@style/AppTheme.NoActionBar">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
```

注意事项：
1. 侧滑布局位置属性：android:layout_gravity="start"
2. DrawerLayout添加适应系统窗口：android:fitsSystemWindows="true"  

***
#侧滑布局改为NavigationView
侧滑布局

```
    <!--侧滑布局-->
    <android.support.design.widget.NavigationView
        android:id="@+id/nav_view"
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:layout_gravity="start"
        android:fitsSystemWindows="true"
        app:headerLayout="@layout/nav_header"
        app:menu="@menu/nav_menu" />

    提示：
    * app:headerLayout="@layout/header"（添加布局头部）
    * app:menu="@menu/nav_menu"（添加布局菜单）
```

@menu/nav_menu：

```
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <group android:checkableBehavior="single">
        <item
            android:id="@+id/news"
            android:title="@string/zh_news" />
        <item
            android:id="@+id/wechat"
            android:title="@string/zh_wechat" />
    </group>
    <item android:title="Communicate">
        <menu>
            <item
                android:id="@+id/nav_share"
                android:icon="@drawable/ic_menu_share"
                android:title="Share" />
            <item
                android:id="@+id/nav_send"
                android:icon="@drawable/ic_menu_send"
                android:title="Send" />
        </menu>
    </item>
</menu>
```

初始化NavigationView：

```
//navigationView  icon显示原始颜色
navigationView.setItemIconTintList(null);
//navigationView添加item选择监听事件
navigationView.setNavigationItemSelectedListener(this);

@Override
    public boolean onNavigationItemSelected(MenuItem item) {
        getSupportActionBar().setTitle(item.getTitle());
        switch (item.getItemId()) {
            case R.id.news:
                break;
        }
        drawerLayout.closeDrawer(GravityCompat.START);
        return true;
    }
```
