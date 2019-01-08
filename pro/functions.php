<?php
require "admin/db_connection.php";
function getCatsAdmin()
{
    global $Con;
    $getQuery ="select * from Categories";
    $getRes =mysqli_query($Con,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['Cat_Id'];
        $title = $row['Cat_Title'];
        echo"<option> $title </option>";
    }
}
function getBrandsAdmin()
{
    global  $Con;
    $getQuery = "select * from Brands";
    $getRes = mysqli_query($Con,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['Brands_Id'];
        $title = $row['Brands_Title'];
        echo"<option> $title</option>";
    }
}
function getCats()
{
    global $Con;
    $getQuery ="select * from Categories";
    $getRes =mysqli_query($Con,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['Cat_Id'];
        $title = $row['Cat_Title'];
        echo"<li><a class='nav-link'  href='#'>$title</a></li>";
    }
}
function getBrands()
{
    global  $Con;
    $getQuery = "select * from Brands";
    $getRes = mysqli_query($Con,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['Brands_Id'];
        $title = $row['Brands_Title'];
        echo"<li><a class='nav-link'  href='#'>$title</a></li>";
    }
}