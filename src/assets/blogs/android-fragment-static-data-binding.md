# Android: Static Data Binding in Fragment

## Build Environment

To configure your app to use data binding, add the dataBinding element to your build.gradle file in the app module.

```
android {
    ....
    dataBinding {
        enabled = true
    }
}
```

## Wrap your root layout with layout tag

layout with bindings has to be wrapped in <layout> tag so {LayoutName}Binding class can be auto-generated for binding purposes

## Sample

### reusable layout xml file
```
<layout xmlns:android="http://schemas.android.com/apk/res/android">
    <data>
        <variable name="title" type="java.lang.String"/>
    </data>
    <LinearLayout ... >
        <TextView ... android:text="@{title, default=DefaultTitle}" />
    </LinearLayout>
</layout>
```

### layout xml file
```
<layout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:bind="http://schemas.android.com/apk/res-auto">
    <LinearLayout  ... >
        // passing literal reference into the binding
        <!-- bind:title="@{@string/title}" -->
        <include layout="@layout/titlebar"
                 bind:title='@{"title"}'  />
        ...
    </LinearLayout>
</layout>
```
### java class
```
public View onCreateView(LayoutInflater inflater,
                         @Nullable ViewGroup container,
                         @Nullable Bundle savedInstanceState) {
    {LayoutName}Binding binding = DataBindingUtil.inflate(
            inflater, R.layout.layout_name, container, false);
    View view = binding.getRoot();
    return view;
}
```
