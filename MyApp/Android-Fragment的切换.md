在主布局中有FrameLayout，如何在代码中对FrameLayout进行切换不同的Fragment呢？

**布局文件中的FrameLayout：**
```
<LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:fitsSystemWindows="true"
        android:orientation="vertical">
        <FrameLayout
            android:id="@+id/content_layout"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
</LinearLayout>
```

**主界面：**
```
    //记录当前Fragment
    private Fragment nowFragment;
    //其他的Fragment
    private NewsFragment newsFragment;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //初始化Fragment
        initFragment(savedInstanceState);
        if (newsFragment == null) {
            newsFragment = new NewsFragment();
        }
        switchContent(nowFragment, newsFragment);
    }

    /**
     * 初始化Fragment
     *
     * @param savedInstanceState
     */
    private void initFragment(Bundle savedInstanceState) {
        //避免横竖屏时出现页面叠加，判断activity是否重新加载
        if (savedInstanceState == null) {
            FragmentManager fm = getSupportFragmentManager();
            FragmentTransaction ft = fm.beginTransaction();
            if (newsFragment == null) {
                newsFragment = new NewsFragment();
            }
            nowFragment = newsFragment;
            ft.replace(R.id.content_layout, nowFragment).commitAllowingStateLoss();
        }
    }

    /**
     * 防止Fragement数据重复加载，采用显示和隐藏的方式
     *
     * @param from
     * @param to
     */
    public void switchContent(Fragment from, Fragment to) {
        if (nowFragment != to) {
            nowFragment = to;
            FragmentManager fm = getSupportFragmentManager();
            FragmentTransaction ft = fm.beginTransaction();
            //检测去往的Fragment是否被添加
            if (!to.isAdded()) {
                //如果没有添加，就隐藏当前Fragment，添加下一个Fragment
                ft.hide(from).add(R.id.content_layout, to).commitAllowingStateLoss();
            } else {
                //如果已经被添加，就隐藏当前Fragment，直接显示下一个Fragement
                ft.hide(from).show(to).commitAllowingStateLoss();
            }
        }
    }
```



